import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-north-america');
}

export default function ThorniaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-north-america" />;
}
