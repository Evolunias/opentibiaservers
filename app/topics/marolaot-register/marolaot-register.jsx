import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-register');
}

export default function MarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="marolaot-register" />;
}
