import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-guide');
}

export default function LowrateTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-guide" />;
}
