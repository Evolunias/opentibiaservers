import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-discord');
}

export default function WithDiscordSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-discord" />;
}
