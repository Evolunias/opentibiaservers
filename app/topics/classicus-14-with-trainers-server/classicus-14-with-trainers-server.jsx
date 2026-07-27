import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-with-trainers-server');
}

export default function Classicus14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-with-trainers-server" />;
}
