import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-with-trainers-server');
}

export default function CalmeraOt14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-with-trainers-server" />;
}
