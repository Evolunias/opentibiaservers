import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-mexico');
}

export default function TibiaraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-mexico" />;
}
