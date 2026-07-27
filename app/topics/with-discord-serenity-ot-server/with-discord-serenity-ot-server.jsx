import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-ot-server');
}

export default function WithDiscordSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-ot-server" />;
}
