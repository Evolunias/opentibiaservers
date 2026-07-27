import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-poland');
}

export default function ElderaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-poland" />;
}
