import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-wiki');
}

export default function WithDiscordAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-wiki" />;
}
