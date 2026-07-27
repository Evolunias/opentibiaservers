import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot');
}

export default function NewSeasonMarolaotKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot" />;
}
