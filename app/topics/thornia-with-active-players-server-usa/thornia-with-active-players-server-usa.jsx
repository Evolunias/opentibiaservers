import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-usa');
}

export default function ThorniaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-usa" />;
}
