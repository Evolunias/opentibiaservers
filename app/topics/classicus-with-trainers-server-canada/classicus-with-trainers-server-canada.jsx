import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-canada');
}

export default function ClassicusWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-canada" />;
}
