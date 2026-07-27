import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-baiak-server');
}

export default function Thornia74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-baiak-server" />;
}
