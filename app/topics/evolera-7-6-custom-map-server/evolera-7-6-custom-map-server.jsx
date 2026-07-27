import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-custom-map-server');
}

export default function Evolera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-custom-map-server" />;
}
