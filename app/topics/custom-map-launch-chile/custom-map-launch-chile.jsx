import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-launch-chile');
}

export default function CustomMapLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-launch-chile" />;
}
