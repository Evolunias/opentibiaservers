import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-argentina');
}

export default function RookgaardTalesBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-argentina" />;
}
