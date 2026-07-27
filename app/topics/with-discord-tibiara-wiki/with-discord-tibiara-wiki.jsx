import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-wiki');
}

export default function WithDiscordTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-wiki" />;
}
