import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-mexico');
}

export default function WithActivePlayersStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-mexico" />;
}
