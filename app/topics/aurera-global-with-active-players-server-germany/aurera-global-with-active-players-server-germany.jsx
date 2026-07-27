import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-germany');
}

export default function AureraGlobalWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-germany" />;
}
