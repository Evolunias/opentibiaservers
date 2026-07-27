import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-baiak-server');
}

export default function Thornia81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-baiak-server" />;
}
