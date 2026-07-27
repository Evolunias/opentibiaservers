import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-trainers-server-sweden');
}

export default function CalmeraOtWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-trainers-server-sweden" />;
}
