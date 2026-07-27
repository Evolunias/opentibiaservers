import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-trainers-server-chile');
}

export default function AmeriaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-trainers-server-chile" />;
}
