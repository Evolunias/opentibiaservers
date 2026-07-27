import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-sweden');
}

export default function WithActivePlayersLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-sweden" />;
}
