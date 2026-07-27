import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-south-america');
}

export default function MediviaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-south-america" />;
}
