import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-germany');
}

export default function WithActivePlayersServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-germany" />;
}
