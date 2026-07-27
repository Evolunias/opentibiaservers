import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvpe-server-chile');
}

export default function MediviaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvpe-server-chile" />;
}
