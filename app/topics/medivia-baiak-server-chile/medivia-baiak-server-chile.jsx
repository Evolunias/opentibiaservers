import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-baiak-server-chile');
}

export default function MediviaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-baiak-server-chile" />;
}
