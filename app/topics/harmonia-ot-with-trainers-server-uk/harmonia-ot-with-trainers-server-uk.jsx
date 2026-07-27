import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-uk');
}

export default function HarmoniaOtWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-uk" />;
}
