import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot');
}

export default function NoResetMarolaotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot" />;
}
