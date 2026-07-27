import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-open-tibia');
}

export default function LowrateRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-open-tibia" />;
}
