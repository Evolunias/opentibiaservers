import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-login');
}

export default function NoResetMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-login" />;
}
