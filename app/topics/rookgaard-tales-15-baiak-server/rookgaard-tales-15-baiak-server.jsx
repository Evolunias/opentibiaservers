import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-baiak-server');
}

export default function RookgaardTales15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-baiak-server" />;
}
