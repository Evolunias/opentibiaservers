import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-baiak-server');
}

export default function Oldera100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-baiak-server" />;
}
