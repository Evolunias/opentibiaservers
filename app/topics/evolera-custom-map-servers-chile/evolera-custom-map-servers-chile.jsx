import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-servers-chile');
}

export default function EvoleraCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-servers-chile" />;
}
