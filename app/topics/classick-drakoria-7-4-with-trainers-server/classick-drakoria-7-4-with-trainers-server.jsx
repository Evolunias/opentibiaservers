import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-with-trainers-server');
}

export default function ClassickDrakoria74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-with-trainers-server" />;
}
