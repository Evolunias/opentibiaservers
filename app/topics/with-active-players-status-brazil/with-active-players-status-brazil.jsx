import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-brazil');
}

export default function WithActivePlayersStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-brazil" />;
}
