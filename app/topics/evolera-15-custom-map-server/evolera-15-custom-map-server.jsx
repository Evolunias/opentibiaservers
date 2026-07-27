import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-custom-map-server');
}

export default function Evolera15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-custom-map-server" />;
}
