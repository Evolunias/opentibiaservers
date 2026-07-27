import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-register');
}

export default function OfficialMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-register" />;
}
