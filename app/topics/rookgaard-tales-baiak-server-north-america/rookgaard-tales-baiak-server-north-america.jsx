import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-north-america');
}

export default function RookgaardTalesBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-north-america" />;
}
