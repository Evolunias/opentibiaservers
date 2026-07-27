import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-argentina');
}

export default function EvoleraWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-argentina" />;
}
