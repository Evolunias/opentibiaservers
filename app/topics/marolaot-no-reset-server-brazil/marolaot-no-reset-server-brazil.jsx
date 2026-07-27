import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-brazil');
}

export default function MarolaotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-brazil" />;
}
