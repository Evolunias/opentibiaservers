import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-canada');
}

export default function WithActivePlayersSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-canada" />;
}
