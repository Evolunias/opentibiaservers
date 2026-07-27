import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-tibia');
}

export default function LowrateRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-tibia" />;
}
