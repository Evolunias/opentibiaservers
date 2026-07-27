import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-real-map-server');
}

export default function Evolera74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-real-map-server" />;
}
