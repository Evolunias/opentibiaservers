import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-argentina');
}

export default function WithActivePlayersLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-argentina" />;
}
