import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-baiak-server');
}

export default function Oldera71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-baiak-server" />;
}
