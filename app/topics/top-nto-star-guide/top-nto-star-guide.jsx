import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-guide');
}

export default function TopNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-guide" />;
}
