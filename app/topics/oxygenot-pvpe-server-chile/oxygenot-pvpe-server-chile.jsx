import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-chile');
}

export default function OxygenotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-chile" />;
}
