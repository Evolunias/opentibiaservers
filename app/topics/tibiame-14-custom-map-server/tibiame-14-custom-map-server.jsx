import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-custom-map-server');
}

export default function Tibiame14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-custom-map-server" />;
}
