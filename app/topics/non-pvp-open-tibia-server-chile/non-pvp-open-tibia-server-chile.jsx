import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-chile');
}

export default function NonPvpOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-chile" />;
}
