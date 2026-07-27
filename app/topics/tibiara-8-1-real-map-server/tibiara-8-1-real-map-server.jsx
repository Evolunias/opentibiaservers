import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-real-map-server');
}

export default function Tibiara81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-real-map-server" />;
}
