import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-south-america');
}

export default function EvoluniaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-south-america" />;
}
