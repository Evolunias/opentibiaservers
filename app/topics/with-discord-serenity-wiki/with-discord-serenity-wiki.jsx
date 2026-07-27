import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-wiki');
}

export default function WithDiscordSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-wiki" />;
}
