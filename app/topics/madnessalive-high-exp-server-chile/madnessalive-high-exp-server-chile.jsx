import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-high-exp-server-chile');
}

export default function MadnessaliveHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-high-exp-server-chile" />;
}
