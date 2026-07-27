import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-with-trainers-server');
}

export default function HarmoniaOt80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-with-trainers-server" />;
}
