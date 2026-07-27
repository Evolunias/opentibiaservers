import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-latin-america');
}

export default function EvoluniaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-latin-america" />;
}
