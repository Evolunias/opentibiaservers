import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-ot');
}

export default function NewSeasonMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-ot" />;
}
