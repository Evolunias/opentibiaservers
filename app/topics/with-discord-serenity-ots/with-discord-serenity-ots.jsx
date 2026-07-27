import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-ots');
}

export default function WithDiscordSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-ots" />;
}
