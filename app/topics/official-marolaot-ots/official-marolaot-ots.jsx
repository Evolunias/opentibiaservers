import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-ots');
}

export default function OfficialMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-ots" />;
}
