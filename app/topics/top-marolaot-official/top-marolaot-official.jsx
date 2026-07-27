import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-official');
}

export default function TopMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-official" />;
}
