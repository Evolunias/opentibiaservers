import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-active-players-server-germany');
}

export default function OxygenotWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-active-players-server-germany" />;
}
