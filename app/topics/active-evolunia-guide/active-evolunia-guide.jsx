import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-guide');
}

export default function ActiveEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-guide" />;
}
