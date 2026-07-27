import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-with-trainers-server');
}

export default function RookgaardTales15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-with-trainers-server" />;
}
