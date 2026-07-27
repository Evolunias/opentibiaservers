import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-north-america');
}

export default function CanobWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-north-america" />;
}
