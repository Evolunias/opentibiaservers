import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-ot-server');
}

export default function CurrentMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-ot-server" />;
}
