import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-with-trainers-server');
}

export default function Rubinot96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-with-trainers-server" />;
}
