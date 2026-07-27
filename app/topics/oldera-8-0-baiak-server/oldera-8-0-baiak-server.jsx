import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-baiak-server');
}

export default function Oldera80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-baiak-server" />;
}
