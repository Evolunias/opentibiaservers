import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-custom-map-server');
}

export default function Tibiame13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-custom-map-server" />;
}
