import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-mexico');
}

export default function WithDiscordLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-mexico" />;
}
