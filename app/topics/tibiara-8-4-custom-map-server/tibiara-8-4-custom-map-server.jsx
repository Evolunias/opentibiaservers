import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-custom-map-server');
}

export default function Tibiara84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-custom-map-server" />;
}
