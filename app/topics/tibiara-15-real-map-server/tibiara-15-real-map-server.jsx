import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-real-map-server');
}

export default function Tibiara15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-real-map-server" />;
}
