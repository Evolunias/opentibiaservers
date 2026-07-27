import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-with-trainers-server');
}

export default function CalmeraOt15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-with-trainers-server" />;
}
