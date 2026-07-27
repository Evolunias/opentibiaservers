import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-europe');
}

export default function OlderaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-europe" />;
}
