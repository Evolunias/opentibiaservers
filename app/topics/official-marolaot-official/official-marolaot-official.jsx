import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-official');
}

export default function OfficialMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-official" />;
}
