import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-usa');
}

export default function WithActivePlayersStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-usa" />;
}
