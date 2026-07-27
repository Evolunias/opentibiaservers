import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-chile');
}

export default function MidhemRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-chile" />;
}
