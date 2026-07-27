import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-with-trainers-server');
}

export default function Classicus15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-with-trainers-server" />;
}
