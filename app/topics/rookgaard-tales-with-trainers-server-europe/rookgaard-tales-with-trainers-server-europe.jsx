import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-europe');
}

export default function RookgaardTalesWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-europe" />;
}
