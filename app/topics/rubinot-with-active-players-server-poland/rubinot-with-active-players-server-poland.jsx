import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-poland');
}

export default function RubinotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-poland" />;
}
