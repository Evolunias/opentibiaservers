import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-europe');
}

export default function RookgaardTalesBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-europe" />;
}
