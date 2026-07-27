import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-france');
}

export default function EvoluniaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-france" />;
}
