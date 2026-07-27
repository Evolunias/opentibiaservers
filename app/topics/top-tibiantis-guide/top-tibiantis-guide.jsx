import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-guide');
}

export default function TopTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-guide" />;
}
