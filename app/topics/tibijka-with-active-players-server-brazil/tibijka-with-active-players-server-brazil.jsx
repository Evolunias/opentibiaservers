import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-brazil');
}

export default function TibijkaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-brazil" />;
}
