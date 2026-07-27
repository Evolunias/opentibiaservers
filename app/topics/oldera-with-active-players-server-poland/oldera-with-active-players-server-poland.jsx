import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-active-players-server-poland');
}

export default function OlderaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-active-players-server-poland" />;
}
