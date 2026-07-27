import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-mexico');
}

export default function WithActivePlayersSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-mexico" />;
}
