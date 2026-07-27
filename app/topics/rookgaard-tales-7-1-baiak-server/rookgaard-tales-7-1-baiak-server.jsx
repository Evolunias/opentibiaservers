import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-baiak-server');
}

export default function RookgaardTales71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-baiak-server" />;
}
