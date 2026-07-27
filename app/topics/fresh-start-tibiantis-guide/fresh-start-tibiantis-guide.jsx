import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-guide');
}

export default function FreshStartTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-guide" />;
}
