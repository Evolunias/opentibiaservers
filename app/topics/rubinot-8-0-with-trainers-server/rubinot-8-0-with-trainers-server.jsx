import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-with-trainers-server');
}

export default function Rubinot80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-with-trainers-server" />;
}
