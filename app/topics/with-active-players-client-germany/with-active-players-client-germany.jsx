import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-germany');
}

export default function WithActivePlayersClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-germany" />;
}
