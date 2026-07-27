import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-register');
}

export default function NewMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-register" />;
}
