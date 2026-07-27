import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-with-trainers-server');
}

export default function ClassickDrakoria12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-with-trainers-server" />;
}
