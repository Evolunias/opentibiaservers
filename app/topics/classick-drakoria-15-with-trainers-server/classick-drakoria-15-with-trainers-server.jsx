import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-with-trainers-server');
}

export default function ClassickDrakoria15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-with-trainers-server" />;
}
