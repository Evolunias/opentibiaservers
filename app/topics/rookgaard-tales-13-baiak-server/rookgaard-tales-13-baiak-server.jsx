import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-baiak-server');
}

export default function RookgaardTales13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-baiak-server" />;
}
