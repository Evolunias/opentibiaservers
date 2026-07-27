import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-europe');
}

export default function CanobWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-europe" />;
}
