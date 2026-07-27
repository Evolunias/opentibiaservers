import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-register');
}

export default function CurrentMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-register" />;
}
