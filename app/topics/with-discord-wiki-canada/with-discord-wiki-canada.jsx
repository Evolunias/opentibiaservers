import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-canada');
}

export default function WithDiscordWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-canada" />;
}
