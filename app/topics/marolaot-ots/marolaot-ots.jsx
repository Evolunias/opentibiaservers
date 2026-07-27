import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-ots');
}

export default function MarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-ots" />;
}
