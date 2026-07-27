import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-canada');
}

export default function RookgaardTalesBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-canada" />;
}
