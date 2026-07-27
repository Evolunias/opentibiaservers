import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-chile');
}

export default function OtmadnessWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-chile" />;
}
