import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-chile');
}

export default function EvoluniaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-chile" />;
}
