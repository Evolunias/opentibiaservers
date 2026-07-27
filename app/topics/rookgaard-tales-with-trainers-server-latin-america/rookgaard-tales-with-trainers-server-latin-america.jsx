import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-latin-america');
}

export default function RookgaardTalesWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-latin-america" />;
}
