import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-canada');
}

export default function EvoluniaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-canada" />;
}
