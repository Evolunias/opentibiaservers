import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-real-map-server');
}

export default function Tibiara12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-real-map-server" />;
}
