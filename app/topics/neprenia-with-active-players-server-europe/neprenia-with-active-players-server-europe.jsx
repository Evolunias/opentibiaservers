import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-europe');
}

export default function NepreniaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-europe" />;
}
