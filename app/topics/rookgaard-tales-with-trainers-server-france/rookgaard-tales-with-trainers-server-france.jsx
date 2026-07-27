import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-france');
}

export default function RookgaardTalesWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-france" />;
}
