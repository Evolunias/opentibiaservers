import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-with-trainers-server');
}

export default function HarmoniaOt96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-with-trainers-server" />;
}
