import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-europe');
}

export default function WithDiscordLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-europe" />;
}
