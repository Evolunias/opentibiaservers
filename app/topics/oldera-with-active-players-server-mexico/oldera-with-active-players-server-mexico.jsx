import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-mexico');
}

export default function OlderaWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-mexico" />;
}
