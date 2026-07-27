import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-baiak-server');
}

export default function Oldera11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-baiak-server" />;
}
