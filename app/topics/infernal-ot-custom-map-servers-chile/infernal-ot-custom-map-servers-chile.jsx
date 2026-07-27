import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-servers-chile');
}

export default function InfernalOtCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-servers-chile" />;
}
