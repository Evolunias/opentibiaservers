import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-sweden');
}

export default function WithDiscordWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-sweden" />;
}
