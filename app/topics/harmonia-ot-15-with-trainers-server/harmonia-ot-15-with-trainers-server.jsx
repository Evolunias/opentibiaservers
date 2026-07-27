import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-with-trainers-server');
}

export default function HarmoniaOt15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-with-trainers-server" />;
}
