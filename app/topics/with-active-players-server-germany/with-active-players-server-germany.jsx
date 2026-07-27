import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-germany');
}

export default function WithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-germany" />;
}
