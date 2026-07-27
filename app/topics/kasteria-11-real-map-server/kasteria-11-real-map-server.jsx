import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-real-map-server');
}

export default function Kasteria11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-real-map-server" />;
}
