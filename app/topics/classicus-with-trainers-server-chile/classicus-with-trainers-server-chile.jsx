import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-chile');
}

export default function ClassicusWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-chile" />;
}
