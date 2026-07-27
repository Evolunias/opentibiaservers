import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-north-america');
}

export default function HarmoniaOtWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-north-america" />;
}
