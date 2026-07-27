import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-ot-server');
}

export default function BestMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-ot-server" />;
}
