import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-mexico');
}

export default function EvoleraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-mexico" />;
}
