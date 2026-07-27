import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-canada');
}

export default function MidhemWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-canada" />;
}
