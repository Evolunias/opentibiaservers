import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-usa');
}

export default function ClassicusWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-usa" />;
}
