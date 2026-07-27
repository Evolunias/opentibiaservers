import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-custom-map-server');
}

export default function Tibiara15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-custom-map-server" />;
}
