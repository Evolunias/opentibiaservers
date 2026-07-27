import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-north-america');
}

export default function WithDiscordLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-north-america" />;
}
