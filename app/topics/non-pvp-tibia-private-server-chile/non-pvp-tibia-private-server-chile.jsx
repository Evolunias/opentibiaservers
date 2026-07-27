import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-chile');
}

export default function NonPvpTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-chile" />;
}
