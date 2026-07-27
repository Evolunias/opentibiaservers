import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-argentina');
}

export default function WithDiscordWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-argentina" />;
}
