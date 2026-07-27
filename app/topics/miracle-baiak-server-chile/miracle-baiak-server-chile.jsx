import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-chile');
}

export default function MiracleBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-chile" />;
}
