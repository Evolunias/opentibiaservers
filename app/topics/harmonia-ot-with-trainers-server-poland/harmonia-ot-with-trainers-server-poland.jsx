import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-poland');
}

export default function HarmoniaOtWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-poland" />;
}
