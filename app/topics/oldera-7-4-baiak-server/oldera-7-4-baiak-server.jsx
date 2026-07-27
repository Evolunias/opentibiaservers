import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-baiak-server');
}

export default function Oldera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-baiak-server" />;
}
