import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-discord-north-america');
}

export default function WithDiscordDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-discord-north-america" />;
}
