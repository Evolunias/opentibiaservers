import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-retro-server-chile');
}

export default function MadnessaliveRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-retro-server-chile" />;
}
