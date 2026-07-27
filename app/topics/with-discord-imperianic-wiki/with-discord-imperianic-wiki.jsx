import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-wiki');
}

export default function WithDiscordImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-wiki" />;
}
