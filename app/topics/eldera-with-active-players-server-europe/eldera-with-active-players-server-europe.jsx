import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-europe');
}

export default function ElderaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-europe" />;
}
