import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-canada');
}

export default function MediviaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-canada" />;
}
