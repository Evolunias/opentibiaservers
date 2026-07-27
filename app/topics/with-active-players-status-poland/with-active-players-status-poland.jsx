import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-poland');
}

export default function WithActivePlayersStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-poland" />;
}
