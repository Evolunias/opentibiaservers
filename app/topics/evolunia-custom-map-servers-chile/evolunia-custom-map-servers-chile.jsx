import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-chile');
}

export default function EvoluniaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-chile" />;
}
