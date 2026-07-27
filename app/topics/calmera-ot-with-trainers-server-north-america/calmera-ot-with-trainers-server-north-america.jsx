import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-trainers-server-north-america');
}

export default function CalmeraOtWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-trainers-server-north-america" />;
}
