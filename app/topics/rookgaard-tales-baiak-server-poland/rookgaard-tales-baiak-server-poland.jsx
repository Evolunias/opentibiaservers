import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-poland');
}

export default function RookgaardTalesBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-poland" />;
}
