import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-baiak-server');
}

export default function Oldera84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-baiak-server" />;
}
