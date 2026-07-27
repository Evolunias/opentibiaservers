import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-guide');
}

export default function PopularTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-guide" />;
}
