import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-germany');
}

export default function EvoleraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-germany" />;
}
