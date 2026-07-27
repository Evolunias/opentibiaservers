import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-guide');
}

export default function BestTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-guide" />;
}
