import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-wiki');
}

export default function WithDiscordAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-wiki" />;
}
