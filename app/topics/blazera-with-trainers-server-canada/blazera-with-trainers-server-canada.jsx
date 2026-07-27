import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-canada');
}

export default function BlazeraWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-canada" />;
}
