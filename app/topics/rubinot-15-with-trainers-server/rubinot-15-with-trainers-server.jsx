import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-with-trainers-server');
}

export default function Rubinot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-with-trainers-server" />;
}
