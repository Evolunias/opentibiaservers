import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-with-trainers-server');
}

export default function RookgaardTales11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-with-trainers-server" />;
}
