import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-germany');
}

export default function RookgaardTalesWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-germany" />;
}
