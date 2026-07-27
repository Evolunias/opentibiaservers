import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-latin-america');
}

export default function EvoluniaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-latin-america" />;
}
