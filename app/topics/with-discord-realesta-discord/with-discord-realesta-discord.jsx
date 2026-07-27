import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-discord');
}

export default function WithDiscordRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-discord" />;
}
