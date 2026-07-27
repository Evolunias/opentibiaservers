import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-with-trainers-server');
}

export default function ClassickDrakoria81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-with-trainers-server" />;
}
