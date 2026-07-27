import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-custom-map-server');
}

export default function Evolera81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-custom-map-server" />;
}
