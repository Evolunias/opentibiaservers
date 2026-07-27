import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-custom-map-server');
}

export default function Marolaot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-custom-map-server" />;
}
