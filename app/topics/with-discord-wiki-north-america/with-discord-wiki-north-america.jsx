import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-north-america');
}

export default function WithDiscordWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-north-america" />;
}
