import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-mexico');
}

export default function TibiaraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-mexico" />;
}
