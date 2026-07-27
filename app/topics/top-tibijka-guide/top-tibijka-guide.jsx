import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-guide');
}

export default function TopTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-guide" />;
}
