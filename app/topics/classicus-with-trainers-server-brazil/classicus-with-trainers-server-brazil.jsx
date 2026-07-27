import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-brazil');
}

export default function ClassicusWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-brazil" />;
}
