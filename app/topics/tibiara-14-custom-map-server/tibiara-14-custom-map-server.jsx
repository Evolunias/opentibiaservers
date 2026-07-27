import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-custom-map-server');
}

export default function Tibiara14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-custom-map-server" />;
}
