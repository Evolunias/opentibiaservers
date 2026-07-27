import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-low-exp-server-chile');
}

export default function MadnessaliveLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-low-exp-server-chile" />;
}
