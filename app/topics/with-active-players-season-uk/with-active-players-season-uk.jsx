import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-uk');
}

export default function WithActivePlayersSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-uk" />;
}
