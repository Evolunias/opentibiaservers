import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka');
}

export default function BestTibijkaKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka" />;
}
