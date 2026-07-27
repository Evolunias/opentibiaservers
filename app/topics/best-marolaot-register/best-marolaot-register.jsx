import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-register');
}

export default function BestMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-register" />;
}
