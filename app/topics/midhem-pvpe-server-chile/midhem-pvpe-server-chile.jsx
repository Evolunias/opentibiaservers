import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvpe-server-chile');
}

export default function MidhemPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvpe-server-chile" />;
}
