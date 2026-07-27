import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-with-trainers-server');
}

export default function HarmoniaOt11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-with-trainers-server" />;
}
