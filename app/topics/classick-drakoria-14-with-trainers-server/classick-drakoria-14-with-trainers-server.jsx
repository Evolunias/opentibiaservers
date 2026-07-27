import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-with-trainers-server');
}

export default function ClassickDrakoria14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-with-trainers-server" />;
}
