import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-germany');
}

export default function CanobWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-germany" />;
}
