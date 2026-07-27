import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-custom-map-server');
}

export default function Tibiame12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-custom-map-server" />;
}
