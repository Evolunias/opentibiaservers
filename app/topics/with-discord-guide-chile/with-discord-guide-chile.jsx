import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-chile');
}

export default function WithDiscordGuideChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-chile" />;
}
