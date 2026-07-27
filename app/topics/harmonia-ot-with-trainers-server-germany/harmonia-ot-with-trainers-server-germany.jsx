import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-germany');
}

export default function HarmoniaOtWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-germany" />;
}
