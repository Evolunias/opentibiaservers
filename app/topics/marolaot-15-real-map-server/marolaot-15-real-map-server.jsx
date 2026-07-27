import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-real-map-server');
}

export default function Marolaot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-real-map-server" />;
}
