import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-ot-server');
}

export default function FreshStartMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-ot-server" />;
}
