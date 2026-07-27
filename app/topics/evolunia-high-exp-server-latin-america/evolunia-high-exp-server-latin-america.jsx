import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-latin-america');
}

export default function EvoluniaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-latin-america" />;
}
