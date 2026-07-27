import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-france');
}

export default function EvoleraWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-france" />;
}
