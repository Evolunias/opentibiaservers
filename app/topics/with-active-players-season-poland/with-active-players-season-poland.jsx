import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-poland');
}

export default function WithActivePlayersSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-poland" />;
}
