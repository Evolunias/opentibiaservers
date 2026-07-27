import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-ot-server');
}

export default function TopMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-ot-server" />;
}
