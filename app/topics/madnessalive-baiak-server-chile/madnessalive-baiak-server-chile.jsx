import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-baiak-server-chile');
}

export default function MadnessaliveBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-baiak-server-chile" />;
}
