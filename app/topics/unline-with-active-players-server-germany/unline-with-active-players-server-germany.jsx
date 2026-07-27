import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-active-players-server-germany');
}

export default function UnlineWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-with-active-players-server-germany" />;
}
