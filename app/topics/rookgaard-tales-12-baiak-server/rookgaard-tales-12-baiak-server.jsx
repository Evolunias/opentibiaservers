import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-baiak-server');
}

export default function RookgaardTales12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-baiak-server" />;
}
