import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-tibia');
}

export default function TopOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-tibia" />;
}
