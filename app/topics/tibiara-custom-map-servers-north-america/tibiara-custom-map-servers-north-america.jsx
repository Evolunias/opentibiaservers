import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-north-america');
}

export default function TibiaraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-north-america" />;
}
