import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-custom-map-server');
}

export default function Tibiara81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-custom-map-server" />;
}
