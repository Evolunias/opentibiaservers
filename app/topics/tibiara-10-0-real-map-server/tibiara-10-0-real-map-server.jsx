import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-real-map-server');
}

export default function Tibiara100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-real-map-server" />;
}
