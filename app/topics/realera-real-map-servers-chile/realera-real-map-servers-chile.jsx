import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-chile');
}

export default function RealeraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-chile" />;
}
