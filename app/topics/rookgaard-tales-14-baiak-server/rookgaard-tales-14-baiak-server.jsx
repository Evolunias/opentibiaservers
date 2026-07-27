import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-baiak-server');
}

export default function RookgaardTales14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-baiak-server" />;
}
