import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-official');
}

export default function ActiveMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-official" />;
}
