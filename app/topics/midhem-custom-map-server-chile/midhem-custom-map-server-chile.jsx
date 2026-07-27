import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-chile');
}

export default function MidhemCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-chile" />;
}
