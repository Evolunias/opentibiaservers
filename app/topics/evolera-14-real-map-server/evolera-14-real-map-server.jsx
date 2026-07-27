import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-real-map-server');
}

export default function Evolera14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-real-map-server" />;
}
