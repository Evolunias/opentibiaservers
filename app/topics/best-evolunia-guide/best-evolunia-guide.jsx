import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-guide');
}

export default function BestEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-guide" />;
}
