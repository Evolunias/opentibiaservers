import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-usa');
}

export default function WithActivePlayersSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-usa" />;
}
