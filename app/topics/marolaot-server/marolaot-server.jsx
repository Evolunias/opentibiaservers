import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-server');
}

export default function MarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-server" />;
}
