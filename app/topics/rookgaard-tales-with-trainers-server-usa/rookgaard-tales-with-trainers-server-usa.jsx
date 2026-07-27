import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-usa');
}

export default function RookgaardTalesWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-usa" />;
}
