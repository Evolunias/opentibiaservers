import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-season-brazil');
}

export default function WithActivePlayersSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-season-brazil" />;
}
