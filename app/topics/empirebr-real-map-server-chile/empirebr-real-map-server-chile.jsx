import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-server-chile');
}

export default function EmpirebrRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-server-chile" />;
}
