import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-france');
}

export default function EvoluniaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-france" />;
}
