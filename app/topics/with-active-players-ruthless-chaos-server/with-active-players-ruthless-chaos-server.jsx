import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ruthless-chaos-server');
}

export default function WithActivePlayersRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ruthless-chaos-server" />;
}
