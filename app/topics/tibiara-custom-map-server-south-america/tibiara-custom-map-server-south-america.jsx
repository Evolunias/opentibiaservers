import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-south-america');
}

export default function TibiaraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-south-america" />;
}
