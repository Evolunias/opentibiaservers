import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-chile');
}

export default function MadnessalivePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-chile" />;
}
