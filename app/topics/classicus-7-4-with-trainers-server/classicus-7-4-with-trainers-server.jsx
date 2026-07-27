import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-with-trainers-server');
}

export default function Classicus74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-with-trainers-server" />;
}
