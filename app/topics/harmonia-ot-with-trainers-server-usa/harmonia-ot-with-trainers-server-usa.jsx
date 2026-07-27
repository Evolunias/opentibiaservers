import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-usa');
}

export default function HarmoniaOtWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-usa" />;
}
