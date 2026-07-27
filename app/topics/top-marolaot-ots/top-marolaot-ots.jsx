import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-ots');
}

export default function TopMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-ots" />;
}
