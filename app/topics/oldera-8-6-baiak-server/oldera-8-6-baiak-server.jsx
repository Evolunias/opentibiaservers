import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-baiak-server');
}

export default function Oldera86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-baiak-server" />;
}
