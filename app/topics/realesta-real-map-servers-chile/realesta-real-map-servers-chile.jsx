import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-chile');
}

export default function RealestaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-chile" />;
}
