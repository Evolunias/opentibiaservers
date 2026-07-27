import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-argentina');
}

export default function CanobWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-argentina" />;
}
