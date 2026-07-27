import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-98-with-trainers-server');
}

export default function Classicus1098WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-98-with-trainers-server" />;
}
