import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-with-trainers-server');
}

export default function CalmeraOt12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-with-trainers-server" />;
}
