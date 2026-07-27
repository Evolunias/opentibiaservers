import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-register');
}

export default function FreshStartMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-register" />;
}
