import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-active-players-server-germany');
}

export default function SaintsotWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-active-players-server-germany" />;
}
