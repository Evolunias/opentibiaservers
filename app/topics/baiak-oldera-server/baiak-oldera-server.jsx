import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-oldera-server');
}

export default function BaiakOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-oldera-server" />;
}
