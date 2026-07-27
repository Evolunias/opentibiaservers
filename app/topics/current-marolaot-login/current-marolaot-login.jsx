import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-login');
}

export default function CurrentMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-login" />;
}
