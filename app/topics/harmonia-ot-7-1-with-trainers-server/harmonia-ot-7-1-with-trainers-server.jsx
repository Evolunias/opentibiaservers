import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-with-trainers-server');
}

export default function HarmoniaOt71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-with-trainers-server" />;
}
