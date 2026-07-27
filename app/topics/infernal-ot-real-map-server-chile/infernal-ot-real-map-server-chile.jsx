import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-real-map-server-chile');
}

export default function InfernalOtRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-real-map-server-chile" />;
}
