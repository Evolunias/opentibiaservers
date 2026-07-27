import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-guide');
}

export default function RubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="rubinot-guide" />;
}
