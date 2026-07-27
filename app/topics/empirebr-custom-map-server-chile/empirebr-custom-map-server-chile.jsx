import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-server-chile');
}

export default function EmpirebrCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-server-chile" />;
}
