import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot');
}

export default function OfficialMarolaotKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot" />;
}
