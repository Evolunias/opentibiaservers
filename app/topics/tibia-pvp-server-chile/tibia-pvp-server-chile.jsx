import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-chile');
}

export default function TibiaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-chile" />;
}
