import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-north-america');
}

export default function TibiaraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-north-america" />;
}
