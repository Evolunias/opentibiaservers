import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-germany');
}

export default function ClassicusWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-germany" />;
}
