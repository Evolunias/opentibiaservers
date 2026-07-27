import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-real-map-server');
}

export default function Tibiara14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-real-map-server" />;
}
