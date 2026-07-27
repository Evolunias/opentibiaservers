import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-europe');
}

export default function BlazeraWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-europe" />;
}
