import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-baiak-server');
}

export default function Thornia76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-baiak-server" />;
}
