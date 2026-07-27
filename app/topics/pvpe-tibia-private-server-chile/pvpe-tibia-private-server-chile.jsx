import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-chile');
}

export default function PvpeTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-chile" />;
}
