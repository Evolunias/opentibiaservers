import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-discord');
}

export default function WithDiscordTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-discord" />;
}
