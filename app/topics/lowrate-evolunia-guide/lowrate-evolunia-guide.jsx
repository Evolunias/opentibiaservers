import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-guide');
}

export default function LowrateEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-guide" />;
}
