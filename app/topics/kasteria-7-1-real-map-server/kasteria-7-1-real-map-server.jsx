import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-real-map-server');
}

export default function Kasteria71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-real-map-server" />;
}
