import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-alternatives');
}

export default function EvoluniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="evolunia-alternatives" />;
}
