import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-login');
}

export default function OfficialMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-login" />;
}
