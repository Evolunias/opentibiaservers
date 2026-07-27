import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-discord');
}

export default function WithDiscordRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-discord" />;
}
