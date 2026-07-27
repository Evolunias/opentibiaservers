import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-trainers-server-sweden');
}

export default function RookgaardTalesWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-trainers-server-sweden" />;
}
