import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-guide');
}

export default function CurrentEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-guide" />;
}
