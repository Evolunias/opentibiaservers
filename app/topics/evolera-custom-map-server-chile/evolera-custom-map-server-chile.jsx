import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-chile');
}

export default function EvoleraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-chile" />;
}
