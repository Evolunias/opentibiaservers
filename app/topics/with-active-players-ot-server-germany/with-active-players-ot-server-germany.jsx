import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-germany');
}

export default function WithActivePlayersOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-germany" />;
}
