import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-with-trainers-server');
}

export default function Classicus12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-with-trainers-server" />;
}
