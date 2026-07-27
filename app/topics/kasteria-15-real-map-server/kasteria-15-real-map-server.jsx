import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-real-map-server');
}

export default function Kasteria15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-real-map-server" />;
}
