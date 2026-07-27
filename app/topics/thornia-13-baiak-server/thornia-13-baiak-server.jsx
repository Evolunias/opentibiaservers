import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-baiak-server');
}

export default function Thornia13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-baiak-server" />;
}
