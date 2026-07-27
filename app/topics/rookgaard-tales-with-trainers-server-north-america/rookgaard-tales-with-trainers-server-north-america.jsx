import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-north-america');
}

export default function RookgaardTalesWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-north-america" />;
}
