import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-south-america');
}

export default function WithDiscordWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-south-america" />;
}
