import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-uk');
}

export default function ClassicusWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-uk" />;
}
