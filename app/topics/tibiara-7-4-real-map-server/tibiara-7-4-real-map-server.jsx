import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-4-real-map-server');
}

export default function Tibiara74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-4-real-map-server" />;
}
