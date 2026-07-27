import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-canada');
}

export default function OlderaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-canada" />;
}
