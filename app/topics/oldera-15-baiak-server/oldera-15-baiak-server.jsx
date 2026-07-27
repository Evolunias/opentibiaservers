import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-baiak-server');
}

export default function Oldera15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-baiak-server" />;
}
