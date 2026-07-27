import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-custom-map-server');
}

export default function Tibiara1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-custom-map-server" />;
}
