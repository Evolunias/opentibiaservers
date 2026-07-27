import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-latin-america');
}

export default function EvoluniaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-latin-america" />;
}
