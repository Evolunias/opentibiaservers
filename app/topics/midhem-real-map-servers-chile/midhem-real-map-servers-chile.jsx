import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-chile');
}

export default function MidhemRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-chile" />;
}
