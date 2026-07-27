import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-canada');
}

export default function EvoluniaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-canada" />;
}
