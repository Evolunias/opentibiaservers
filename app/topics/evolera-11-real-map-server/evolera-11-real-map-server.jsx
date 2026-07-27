import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-real-map-server');
}

export default function Evolera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-real-map-server" />;
}
