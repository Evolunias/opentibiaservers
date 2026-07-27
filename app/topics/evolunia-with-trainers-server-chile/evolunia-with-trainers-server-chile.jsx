import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-trainers-server-chile');
}

export default function EvoluniaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-trainers-server-chile" />;
}
