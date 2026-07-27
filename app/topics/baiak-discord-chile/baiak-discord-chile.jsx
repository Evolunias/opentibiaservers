import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-chile');
}

export default function BaiakDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-chile" />;
}
