import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-tibia');
}

export default function LowrateOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-tibia" />;
}
