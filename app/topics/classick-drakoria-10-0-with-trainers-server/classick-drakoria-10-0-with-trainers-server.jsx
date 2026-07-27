import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-with-trainers-server');
}

export default function ClassickDrakoria100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-with-trainers-server" />;
}
