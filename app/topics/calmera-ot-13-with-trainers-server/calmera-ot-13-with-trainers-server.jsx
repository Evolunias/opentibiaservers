import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-with-trainers-server');
}

export default function CalmeraOt13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-with-trainers-server" />;
}
