import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-custom-map-server');
}

export default function Tibiame100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-custom-map-server" />;
}
