import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-uk');
}

export default function RookgaardTalesWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-uk" />;
}
