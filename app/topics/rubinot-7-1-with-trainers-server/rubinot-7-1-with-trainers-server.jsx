import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-1-with-trainers-server');
}

export default function Rubinot71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-1-with-trainers-server" />;
}
