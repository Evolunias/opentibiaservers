import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-ot-server');
}

export default function NoResetMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-ot-server" />;
}
