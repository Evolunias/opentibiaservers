import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-canada');
}

export default function RealeraWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-canada" />;
}
