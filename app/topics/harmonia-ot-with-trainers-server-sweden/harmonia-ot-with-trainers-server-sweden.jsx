import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-sweden');
}

export default function HarmoniaOtWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-sweden" />;
}
