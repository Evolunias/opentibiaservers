import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-sweden');
}

export default function EvoleraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-sweden" />;
}
