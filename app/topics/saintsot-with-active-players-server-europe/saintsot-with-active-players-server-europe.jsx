import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-active-players-server-europe');
}

export default function SaintsotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-active-players-server-europe" />;
}
