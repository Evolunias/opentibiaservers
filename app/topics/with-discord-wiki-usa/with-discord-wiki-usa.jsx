import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-usa');
}

export default function WithDiscordWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-usa" />;
}
