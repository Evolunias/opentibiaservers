import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-poland');
}

export default function WithDiscordLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-poland" />;
}
