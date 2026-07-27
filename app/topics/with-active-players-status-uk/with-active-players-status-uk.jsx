import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-uk');
}

export default function WithActivePlayersStatusUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-uk" />;
}
