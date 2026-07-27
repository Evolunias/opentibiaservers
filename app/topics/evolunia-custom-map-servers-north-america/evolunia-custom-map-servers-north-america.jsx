import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-north-america');
}

export default function EvoluniaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-north-america" />;
}
