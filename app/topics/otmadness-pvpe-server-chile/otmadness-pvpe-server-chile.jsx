import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-chile');
}

export default function OtmadnessPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-chile" />;
}
