import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-guide');
}

export default function NewEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-guide" />;
}
