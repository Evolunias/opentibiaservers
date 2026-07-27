import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-germany');
}

export default function BlazeraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-germany" />;
}
