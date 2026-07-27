import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-with-trainers-server');
}

export default function ClassickDrakoria80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-with-trainers-server" />;
}
