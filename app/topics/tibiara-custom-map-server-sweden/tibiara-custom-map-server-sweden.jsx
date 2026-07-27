import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-sweden');
}

export default function TibiaraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-sweden" />;
}
