import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-custom-map-server');
}

export default function Evolera96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-custom-map-server" />;
}
