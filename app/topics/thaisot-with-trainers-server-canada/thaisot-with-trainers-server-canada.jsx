import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-canada');
}

export default function ThaisotWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-canada" />;
}
