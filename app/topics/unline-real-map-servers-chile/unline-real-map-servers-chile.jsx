import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-chile');
}

export default function UnlineRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-chile" />;
}
