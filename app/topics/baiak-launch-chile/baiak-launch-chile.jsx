import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-chile');
}

export default function BaiakLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-chile" />;
}
