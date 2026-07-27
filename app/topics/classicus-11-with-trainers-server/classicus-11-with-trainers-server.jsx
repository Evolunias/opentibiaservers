import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-with-trainers-server');
}

export default function Classicus11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-with-trainers-server" />;
}
