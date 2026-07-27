import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-baiak-server');
}

export default function Oldera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-baiak-server" />;
}
