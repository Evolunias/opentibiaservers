import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-guide');
}

export default function LowrateRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-guide" />;
}
