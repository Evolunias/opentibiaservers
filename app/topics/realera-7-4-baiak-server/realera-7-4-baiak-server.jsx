import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-baiak-server');
}

export default function Realera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-baiak-server" />;
}
