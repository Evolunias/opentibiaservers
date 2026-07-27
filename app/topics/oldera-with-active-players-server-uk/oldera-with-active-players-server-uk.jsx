import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-uk');
}

export default function OlderaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-uk" />;
}
