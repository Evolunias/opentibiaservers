import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-south-america');
}

export default function WithDiscordLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-south-america" />;
}
