import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-france');
}

export default function OlderaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-france" />;
}
