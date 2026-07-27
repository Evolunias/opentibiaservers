import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-guide');
}

export default function CurrentNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-guide" />;
}
