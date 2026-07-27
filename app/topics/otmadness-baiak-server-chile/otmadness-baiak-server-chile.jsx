import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-chile');
}

export default function OtmadnessBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-chile" />;
}
