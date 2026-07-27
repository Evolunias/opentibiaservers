import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-wiki');
}

export default function WithDiscordClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-wiki" />;
}
