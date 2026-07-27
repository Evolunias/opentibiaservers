import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-with-trainers-server');
}

export default function HarmoniaOt100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-with-trainers-server" />;
}
