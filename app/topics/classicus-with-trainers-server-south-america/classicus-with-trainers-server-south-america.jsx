import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-south-america');
}

export default function ClassicusWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-south-america" />;
}
