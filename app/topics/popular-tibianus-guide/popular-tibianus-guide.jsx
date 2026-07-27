import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-guide');
}

export default function PopularTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-guide" />;
}
