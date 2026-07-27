import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-guide');
}

export default function PopularTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-guide" />;
}
