import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-wiki');
}

export default function WithDiscordOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-wiki" />;
}
