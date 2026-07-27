import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-launch-chile');
}

export default function RealMapLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-launch-chile" />;
}
