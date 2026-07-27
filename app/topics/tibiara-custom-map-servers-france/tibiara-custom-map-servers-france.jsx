import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-france');
}

export default function TibiaraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-france" />;
}
