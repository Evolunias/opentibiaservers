import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-chile');
}

export default function RealestaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-chile" />;
}
