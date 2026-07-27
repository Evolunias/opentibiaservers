import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-brazil');
}

export default function OlderaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-brazil" />;
}
