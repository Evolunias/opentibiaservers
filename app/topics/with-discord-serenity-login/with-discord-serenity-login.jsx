import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-login');
}

export default function WithDiscordSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-login" />;
}
