import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-custom-map-server');
}

export default function Tibiame772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-custom-map-server" />;
}
