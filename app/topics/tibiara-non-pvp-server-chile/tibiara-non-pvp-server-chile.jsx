import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-chile');
}

export default function TibiaraNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-chile" />;
}
