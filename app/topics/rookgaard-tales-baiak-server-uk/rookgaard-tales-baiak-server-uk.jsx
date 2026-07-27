import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-uk');
}

export default function RookgaardTalesBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-uk" />;
}
