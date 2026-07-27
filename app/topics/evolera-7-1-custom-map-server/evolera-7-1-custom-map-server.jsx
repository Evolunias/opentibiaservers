import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-custom-map-server');
}

export default function Evolera71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-custom-map-server" />;
}
