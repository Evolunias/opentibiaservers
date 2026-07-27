import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-baiak-server');
}

export default function Oldera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-baiak-server" />;
}
