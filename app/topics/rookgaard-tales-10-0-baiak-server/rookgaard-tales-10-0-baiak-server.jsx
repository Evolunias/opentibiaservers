import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-baiak-server');
}

export default function RookgaardTales100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-baiak-server" />;
}
