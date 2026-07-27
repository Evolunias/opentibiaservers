import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-chile');
}

export default function PvpTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-chile" />;
}
