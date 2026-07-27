import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-chile');
}

export default function TibiaraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-chile" />;
}
