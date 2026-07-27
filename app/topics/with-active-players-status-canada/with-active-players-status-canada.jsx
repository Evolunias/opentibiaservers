import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-canada');
}

export default function WithActivePlayersStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-canada" />;
}
