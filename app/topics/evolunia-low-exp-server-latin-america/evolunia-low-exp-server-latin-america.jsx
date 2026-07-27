import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-latin-america');
}

export default function EvoluniaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-latin-america" />;
}
