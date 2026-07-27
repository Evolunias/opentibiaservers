import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-with-trainers-server');
}

export default function ClassickDrakoria13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-with-trainers-server" />;
}
