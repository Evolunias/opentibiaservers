import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-baiak-server');
}

export default function Oldera76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-baiak-server" />;
}
