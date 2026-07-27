import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-guide');
}

export default function FreshStartNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-guide" />;
}
