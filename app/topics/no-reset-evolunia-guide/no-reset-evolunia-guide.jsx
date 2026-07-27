import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-guide');
}

export default function NoResetEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-guide" />;
}
