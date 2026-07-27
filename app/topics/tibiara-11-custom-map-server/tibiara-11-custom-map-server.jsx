import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-custom-map-server');
}

export default function Tibiara11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-custom-map-server" />;
}
