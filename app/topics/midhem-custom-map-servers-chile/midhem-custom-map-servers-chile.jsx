import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-chile');
}

export default function MidhemCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-chile" />;
}
