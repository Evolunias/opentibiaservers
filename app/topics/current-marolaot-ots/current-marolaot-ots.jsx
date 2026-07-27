import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-ots');
}

export default function CurrentMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-ots" />;
}
