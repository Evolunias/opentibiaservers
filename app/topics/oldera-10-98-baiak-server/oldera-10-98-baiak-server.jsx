import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-baiak-server');
}

export default function Oldera1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-baiak-server" />;
}
