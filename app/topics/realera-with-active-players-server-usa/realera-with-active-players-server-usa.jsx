import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-usa');
}

export default function RealeraWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-usa" />;
}
