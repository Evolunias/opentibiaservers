import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-launch-south-america');
}

export default function WithActivePlayersLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-launch-south-america" />;
}
