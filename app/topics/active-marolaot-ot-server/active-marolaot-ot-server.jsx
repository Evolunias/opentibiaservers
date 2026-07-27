import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-ot-server');
}

export default function ActiveMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-ot-server" />;
}
