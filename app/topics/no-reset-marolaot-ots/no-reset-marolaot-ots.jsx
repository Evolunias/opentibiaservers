import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-ots');
}

export default function NoResetMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-ots" />;
}
