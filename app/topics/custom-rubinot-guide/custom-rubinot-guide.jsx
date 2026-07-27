import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-guide');
}

export default function CustomRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-guide" />;
}
