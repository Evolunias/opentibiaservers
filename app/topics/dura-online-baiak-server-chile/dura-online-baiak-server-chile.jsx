import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-chile');
}

export default function DuraOnlineBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-chile" />;
}
