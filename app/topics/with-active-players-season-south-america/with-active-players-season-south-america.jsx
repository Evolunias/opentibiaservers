import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-south-america');
}

export default function WithActivePlayersSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-south-america" />;
}
