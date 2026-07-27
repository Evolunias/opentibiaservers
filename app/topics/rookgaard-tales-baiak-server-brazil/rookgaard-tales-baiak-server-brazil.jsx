import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-brazil');
}

export default function RookgaardTalesBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-brazil" />;
}
