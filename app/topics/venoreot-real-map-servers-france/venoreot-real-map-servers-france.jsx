import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-france');
}

export default function VenoreotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-france" />;
}
