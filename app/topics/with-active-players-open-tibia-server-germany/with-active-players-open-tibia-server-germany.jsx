import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-open-tibia-server-germany');
}

export default function WithActivePlayersOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-open-tibia-server-germany" />;
}
