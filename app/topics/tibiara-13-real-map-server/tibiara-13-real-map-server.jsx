import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-real-map-server');
}

export default function Tibiara13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-real-map-server" />;
}
