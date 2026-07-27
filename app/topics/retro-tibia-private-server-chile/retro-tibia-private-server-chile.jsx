import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibia-private-server-chile');
}

export default function RetroTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="retro-tibia-private-server-chile" />;
}
