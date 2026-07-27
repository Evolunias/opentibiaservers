import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-with-trainers-server');
}

export default function Rubinot84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-with-trainers-server" />;
}
