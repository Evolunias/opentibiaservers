import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-training');
}

export default function RookgaardTalesTrainingKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-training" />;
}
