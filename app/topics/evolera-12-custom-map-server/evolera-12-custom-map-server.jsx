import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-custom-map-server');
}

export default function Evolera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-custom-map-server" />;
}
