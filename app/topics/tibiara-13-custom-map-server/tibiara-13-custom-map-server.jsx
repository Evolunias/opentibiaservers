import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-custom-map-server');
}

export default function Tibiara13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-custom-map-server" />;
}
