import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-baiak-server');
}

export default function Oldera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-baiak-server" />;
}
