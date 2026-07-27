import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-active-players-server-poland');
}

export default function SaintsotWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-active-players-server-poland" />;
}
