import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-real-map-server');
}

export default function Kasteria84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-real-map-server" />;
}
