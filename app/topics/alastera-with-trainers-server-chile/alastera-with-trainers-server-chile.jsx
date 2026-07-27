import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-chile');
}

export default function AlasteraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-chile" />;
}
