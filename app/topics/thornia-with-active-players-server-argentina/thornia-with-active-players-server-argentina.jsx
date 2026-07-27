import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-argentina');
}

export default function ThorniaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-argentina" />;
}
