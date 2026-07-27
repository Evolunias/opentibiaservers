import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-north-america');
}

export default function TibijkaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-north-america" />;
}
