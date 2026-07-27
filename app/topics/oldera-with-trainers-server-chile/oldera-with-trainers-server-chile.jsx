import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-chile');
}

export default function OlderaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-chile" />;
}
