import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-real-map-server');
}

export default function Evolera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-real-map-server" />;
}
