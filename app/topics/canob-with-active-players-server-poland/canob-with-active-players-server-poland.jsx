import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-poland');
}

export default function CanobWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-poland" />;
}
