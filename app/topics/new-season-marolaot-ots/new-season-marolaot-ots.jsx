import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-ots');
}

export default function NewSeasonMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-ots" />;
}
