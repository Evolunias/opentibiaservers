import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-chile');
}

export default function EvoluniaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-chile" />;
}
