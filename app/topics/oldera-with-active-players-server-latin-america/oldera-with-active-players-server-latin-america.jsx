import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-latin-america');
}

export default function OlderaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-latin-america" />;
}
