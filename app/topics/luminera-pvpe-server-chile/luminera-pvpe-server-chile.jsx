import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-chile');
}

export default function LumineraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-chile" />;
}
