import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-guide');
}

export default function CurrentTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-guide" />;
}
