import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-europe');
}

export default function WithActivePlayersSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-europe" />;
}
