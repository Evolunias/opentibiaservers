import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-private-server');
}

export default function WithDiscordSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-private-server" />;
}
