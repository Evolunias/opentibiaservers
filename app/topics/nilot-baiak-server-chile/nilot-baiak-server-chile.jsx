import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-chile');
}

export default function NilotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-chile" />;
}
