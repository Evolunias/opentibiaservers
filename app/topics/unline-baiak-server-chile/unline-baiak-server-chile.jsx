import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-chile');
}

export default function UnlineBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-chile" />;
}
