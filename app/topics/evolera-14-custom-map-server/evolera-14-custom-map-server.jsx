import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-custom-map-server');
}

export default function Evolera14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-custom-map-server" />;
}
