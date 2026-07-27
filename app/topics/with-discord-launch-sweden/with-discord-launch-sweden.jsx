import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-sweden');
}

export default function WithDiscordLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-sweden" />;
}
