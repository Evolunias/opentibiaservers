import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-usa');
}

export default function CanobWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-usa" />;
}
