import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-custom-map-server');
}

export default function Tibiara76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-custom-map-server" />;
}
