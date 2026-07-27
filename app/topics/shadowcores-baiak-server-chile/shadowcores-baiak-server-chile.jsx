import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-chile');
}

export default function ShadowcoresBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-chile" />;
}
