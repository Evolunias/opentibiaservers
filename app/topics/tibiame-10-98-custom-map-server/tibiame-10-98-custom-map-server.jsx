import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-custom-map-server');
}

export default function Tibiame1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-custom-map-server" />;
}
