import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-north-america');
}

export default function EvoleraWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-north-america" />;
}
