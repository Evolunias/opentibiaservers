import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-france');
}

export default function TibiaraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-france" />;
}
