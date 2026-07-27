import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-real-map-server');
}

export default function Kasteria12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-real-map-server" />;
}
