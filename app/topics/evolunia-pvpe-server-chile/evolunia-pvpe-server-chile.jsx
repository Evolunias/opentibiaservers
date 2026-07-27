import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvpe-server-chile');
}

export default function EvoluniaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvpe-server-chile" />;
}
