import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-uk');
}

export default function WithDiscordLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-uk" />;
}
