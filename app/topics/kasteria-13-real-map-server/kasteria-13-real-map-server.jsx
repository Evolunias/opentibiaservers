import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-real-map-server');
}

export default function Kasteria13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-real-map-server" />;
}
