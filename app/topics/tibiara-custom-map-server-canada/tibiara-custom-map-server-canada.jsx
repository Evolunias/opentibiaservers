import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-canada');
}

export default function TibiaraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-canada" />;
}
