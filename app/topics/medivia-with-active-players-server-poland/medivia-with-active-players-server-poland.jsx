import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-poland');
}

export default function MediviaWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-poland" />;
}
