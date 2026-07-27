import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-north-america');
}

export default function OlderaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-north-america" />;
}
