import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-guide');
}

export default function EvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="evolunia-guide" />;
}
