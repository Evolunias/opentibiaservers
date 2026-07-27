import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-chile');
}

export default function ElderaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-chile" />;
}
