import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-real-map-server');
}

export default function Marolaot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-real-map-server" />;
}
