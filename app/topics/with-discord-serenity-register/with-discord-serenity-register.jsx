import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-register');
}

export default function WithDiscordSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-register" />;
}
