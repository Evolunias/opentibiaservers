import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-ot');
}

export default function WithDiscordSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-ot" />;
}
