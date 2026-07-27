import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-guide');
}

export default function PopularNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-guide" />;
}
