import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-guide');
}

export default function FreshStartEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-guide" />;
}
