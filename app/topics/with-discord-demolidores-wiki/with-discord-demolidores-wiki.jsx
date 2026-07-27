import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-wiki');
}

export default function WithDiscordDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-wiki" />;
}
