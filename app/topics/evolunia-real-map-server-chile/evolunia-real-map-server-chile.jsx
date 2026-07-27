import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-chile');
}

export default function EvoluniaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-chile" />;
}
