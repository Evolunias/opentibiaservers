import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-baiak-server');
}

export default function Thornia854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-baiak-server" />;
}
