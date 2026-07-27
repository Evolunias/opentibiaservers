import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-brazil');
}

export default function RealeraWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-brazil" />;
}
