import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-official');
}

export default function FreshStartMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-official" />;
}
