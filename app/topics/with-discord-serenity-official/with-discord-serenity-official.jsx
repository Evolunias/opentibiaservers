import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-official');
}

export default function WithDiscordSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-official" />;
}
