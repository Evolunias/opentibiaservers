import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-brazil');
}

export default function WithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-brazil" />;
}
