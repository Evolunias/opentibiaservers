import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-north-america');
}

export default function ClassicusWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-north-america" />;
}
