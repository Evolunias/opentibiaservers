import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-with-trainers-server');
}

export default function Classicus76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-with-trainers-server" />;
}
