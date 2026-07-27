import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-with-trainers-server');
}

export default function HarmoniaOt12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-with-trainers-server" />;
}
