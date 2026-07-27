import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-guide');
}

export default function FreshStartRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-guide" />;
}
