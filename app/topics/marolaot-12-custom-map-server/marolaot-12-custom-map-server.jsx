import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-custom-map-server');
}

export default function Marolaot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-custom-map-server" />;
}
