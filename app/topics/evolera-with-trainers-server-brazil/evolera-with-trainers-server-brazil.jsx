import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-brazil');
}

export default function EvoleraWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-brazil" />;
}
