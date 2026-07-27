import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-with-trainers-server');
}

export default function CalmeraOt11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-with-trainers-server" />;
}
