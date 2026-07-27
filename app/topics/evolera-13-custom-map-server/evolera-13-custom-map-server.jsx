import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-custom-map-server');
}

export default function Evolera13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-custom-map-server" />;
}
