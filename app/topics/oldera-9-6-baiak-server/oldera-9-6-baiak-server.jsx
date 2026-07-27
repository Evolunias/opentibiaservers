import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-baiak-server');
}

export default function Oldera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-baiak-server" />;
}
