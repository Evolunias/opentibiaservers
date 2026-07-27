import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-with-trainers-server');
}

export default function Classicus86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-with-trainers-server" />;
}
