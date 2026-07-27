import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-trainers-server-canada');
}

export default function CanobWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-trainers-server-canada" />;
}
