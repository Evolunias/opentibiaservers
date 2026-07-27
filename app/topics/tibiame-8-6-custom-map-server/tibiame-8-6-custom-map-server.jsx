import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-custom-map-server');
}

export default function Tibiame86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-custom-map-server" />;
}
