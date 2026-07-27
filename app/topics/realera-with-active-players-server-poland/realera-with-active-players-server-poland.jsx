import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-poland');
}

export default function RealeraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-poland" />;
}
