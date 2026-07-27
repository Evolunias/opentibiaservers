import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-baiak-server-chile');
}

export default function HarmoniaOtBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-baiak-server-chile" />;
}
