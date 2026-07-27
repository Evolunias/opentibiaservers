import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-eldera-server');
}

export default function BaiakElderaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-eldera-server" />;
}
