import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-poland');
}

export default function RookgaardTalesWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-poland" />;
}
