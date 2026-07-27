import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-canada');
}

export default function RealestaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-canada" />;
}
