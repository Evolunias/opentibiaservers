import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-fresh-start-server-chile');
}

export default function MadnessaliveFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-fresh-start-server-chile" />;
}
