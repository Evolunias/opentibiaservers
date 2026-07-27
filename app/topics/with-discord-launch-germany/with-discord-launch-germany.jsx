import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-germany');
}

export default function WithDiscordLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-germany" />;
}
