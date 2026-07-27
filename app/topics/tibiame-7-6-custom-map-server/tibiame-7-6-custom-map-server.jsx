import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-custom-map-server');
}

export default function Tibiame76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-custom-map-server" />;
}
