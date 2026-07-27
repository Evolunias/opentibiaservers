import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-baiak-server');
}

export default function Thornia14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-baiak-server" />;
}
