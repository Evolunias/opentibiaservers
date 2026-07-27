import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-canada');
}

export default function TibijkaWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-canada" />;
}
