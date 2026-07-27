import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-poland');
}

export default function ClassicusWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-poland" />;
}
