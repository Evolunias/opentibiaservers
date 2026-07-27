import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-trainers-server-chile');
}

export default function NilotWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-trainers-server-chile" />;
}
