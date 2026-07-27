import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-baiak-server');
}

export default function RookgaardTales81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-baiak-server" />;
}
