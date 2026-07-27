import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-brazil');
}

export default function CanobWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-brazil" />;
}
