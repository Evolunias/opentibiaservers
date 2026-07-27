import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-chile');
}

export default function NepreniaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-chile" />;
}
