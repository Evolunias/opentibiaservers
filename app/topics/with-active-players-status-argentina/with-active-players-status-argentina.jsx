import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-argentina');
}

export default function WithActivePlayersStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-argentina" />;
}
