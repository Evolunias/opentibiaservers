import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-latin-america');
}

export default function EvoleraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-latin-america" />;
}
