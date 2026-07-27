import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-client');
}

export default function NewSeasonMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-client" />;
}
