import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-server');
}

export default function WithDiscordSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-server" />;
}
