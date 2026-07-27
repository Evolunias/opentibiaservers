import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-south-america');
}

export default function BlazeraWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-south-america" />;
}
