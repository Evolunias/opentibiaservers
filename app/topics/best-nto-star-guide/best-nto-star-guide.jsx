import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-guide');
}

export default function BestNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-guide" />;
}
