import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-open-tibia-server-sweden');
}

export default function WithActivePlayersOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-open-tibia-server-sweden" />;
}
