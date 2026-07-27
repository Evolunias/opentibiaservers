import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-sweden');
}

export default function ClassicusWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-sweden" />;
}
