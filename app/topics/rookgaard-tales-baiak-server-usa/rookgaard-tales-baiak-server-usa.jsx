import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-usa');
}

export default function RookgaardTalesBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-usa" />;
}
