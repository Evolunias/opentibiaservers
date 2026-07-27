import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-register');
}

export default function ActiveMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-register" />;
}
