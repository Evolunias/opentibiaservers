import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-guide');
}

export default function TopEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-guide" />;
}
