import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-argentina');
}

export default function RealeraWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-argentina" />;
}
