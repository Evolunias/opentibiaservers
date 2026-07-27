import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-france');
}

export default function VenoreotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-france" />;
}
