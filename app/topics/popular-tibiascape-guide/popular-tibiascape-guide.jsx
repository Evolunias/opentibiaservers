import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-guide');
}

export default function PopularTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-guide" />;
}
