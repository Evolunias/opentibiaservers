import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-trainers-server-chile');
}

export default function LumineraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-trainers-server-chile" />;
}
