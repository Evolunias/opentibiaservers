import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-argentina');
}

export default function OlderaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-argentina" />;
}
