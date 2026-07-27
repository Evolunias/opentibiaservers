import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-argentina');
}

export default function WithDiscordLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-argentina" />;
}
