import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-chile');
}

export default function WithDiscordWikiChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-chile" />;
}
