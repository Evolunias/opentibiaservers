import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-chile');
}

export default function RetroOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-chile" />;
}
