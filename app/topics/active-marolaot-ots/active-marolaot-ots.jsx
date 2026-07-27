import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-ots');
}

export default function ActiveMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-ots" />;
}
