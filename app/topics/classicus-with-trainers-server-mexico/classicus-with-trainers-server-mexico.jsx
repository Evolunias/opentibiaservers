import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-mexico');
}

export default function ClassicusWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-mexico" />;
}
