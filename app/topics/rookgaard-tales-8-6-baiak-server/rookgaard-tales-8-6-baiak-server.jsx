import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-baiak-server');
}

export default function RookgaardTales86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-baiak-server" />;
}
