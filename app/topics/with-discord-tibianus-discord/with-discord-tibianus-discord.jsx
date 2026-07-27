import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-discord');
}

export default function WithDiscordTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-discord" />;
}
