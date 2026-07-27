import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-chile');
}

export default function InfernalOtBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-chile" />;
}
