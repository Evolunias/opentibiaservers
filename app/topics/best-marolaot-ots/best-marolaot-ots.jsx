import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-ots');
}

export default function BestMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-ots" />;
}
