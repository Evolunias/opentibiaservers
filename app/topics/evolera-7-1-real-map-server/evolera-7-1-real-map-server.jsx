import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-real-map-server');
}

export default function Evolera71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-real-map-server" />;
}
