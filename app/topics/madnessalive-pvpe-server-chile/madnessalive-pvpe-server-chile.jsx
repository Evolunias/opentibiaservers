import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-chile');
}

export default function MadnessalivePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-chile" />;
}
