import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-chile');
}

export default function WithDiscordSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-chile" />;
}
