import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-real-map-server');
}

export default function Tibiara84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-real-map-server" />;
}
