import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-canada');
}

export default function TibiascapeWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-canada" />;
}
