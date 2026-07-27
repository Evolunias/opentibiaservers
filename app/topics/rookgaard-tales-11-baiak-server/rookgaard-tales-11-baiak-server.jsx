import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-baiak-server');
}

export default function RookgaardTales11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-baiak-server" />;
}
