import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-custom-map-server');
}

export default function Tibiame80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-custom-map-server" />;
}
