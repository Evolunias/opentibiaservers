import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-latin-america');
}

export default function WithDiscordLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-latin-america" />;
}
