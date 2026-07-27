import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-south-america');
}

export default function EvoluniaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-south-america" />;
}
