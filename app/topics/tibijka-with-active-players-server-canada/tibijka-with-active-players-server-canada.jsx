import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-canada');
}

export default function TibijkaWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-canada" />;
}
