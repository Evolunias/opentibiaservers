import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-chile');
}

export default function EmpirebrCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-chile" />;
}
