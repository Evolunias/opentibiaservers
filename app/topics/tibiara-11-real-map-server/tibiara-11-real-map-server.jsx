import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-real-map-server');
}

export default function Tibiara11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-real-map-server" />;
}
