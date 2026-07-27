import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-chile');
}

export default function RealMapDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-chile" />;
}
