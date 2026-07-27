import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-north-america');
}

export default function WithActivePlayersSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-north-america" />;
}
