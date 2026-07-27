import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-poland');
}

export default function BlazeraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-poland" />;
}
