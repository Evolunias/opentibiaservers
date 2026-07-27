import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-north-america');
}

export default function EvoluniaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-north-america" />;
}
