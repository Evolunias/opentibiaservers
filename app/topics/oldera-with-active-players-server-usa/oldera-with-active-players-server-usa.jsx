import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-usa');
}

export default function OlderaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-usa" />;
}
