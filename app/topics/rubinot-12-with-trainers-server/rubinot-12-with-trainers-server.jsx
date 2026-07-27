import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-with-trainers-server');
}

export default function Rubinot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-with-trainers-server" />;
}
