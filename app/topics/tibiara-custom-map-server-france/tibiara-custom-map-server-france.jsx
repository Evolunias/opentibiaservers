import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-france');
}

export default function TibiaraCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-france" />;
}
