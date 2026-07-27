import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-real-map-server');
}

export default function Tibiara96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-real-map-server" />;
}
