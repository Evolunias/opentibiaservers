import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-discord-chile');
}

export default function CustomMapDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-discord-chile" />;
}
