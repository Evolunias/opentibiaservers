import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-ot-server');
}

export default function MarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-ot-server" />;
}
