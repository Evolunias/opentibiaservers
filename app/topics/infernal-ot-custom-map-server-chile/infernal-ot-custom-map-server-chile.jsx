import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-custom-map-server-chile');
}

export default function InfernalOtCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-custom-map-server-chile" />;
}
