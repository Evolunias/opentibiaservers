import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-client');
}

export default function WithDiscordSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-client" />;
}
