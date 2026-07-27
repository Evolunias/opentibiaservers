import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-server');
}

export default function NewSeasonMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-server" />;
}
