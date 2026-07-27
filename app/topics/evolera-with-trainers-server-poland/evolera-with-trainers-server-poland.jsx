import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-poland');
}

export default function EvoleraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-poland" />;
}
