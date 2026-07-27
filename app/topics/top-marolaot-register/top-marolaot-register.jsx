import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-register');
}

export default function TopMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-register" />;
}
