import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-custom-map-server');
}

export default function Evolera86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-custom-map-server" />;
}
