import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-usa');
}

export default function WithDiscordLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-usa" />;
}
