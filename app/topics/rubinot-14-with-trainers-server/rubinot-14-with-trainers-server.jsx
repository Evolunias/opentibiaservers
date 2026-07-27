import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-with-trainers-server');
}

export default function Rubinot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-with-trainers-server" />;
}
