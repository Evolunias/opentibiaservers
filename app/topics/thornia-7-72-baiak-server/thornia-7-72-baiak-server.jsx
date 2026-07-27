import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-baiak-server');
}

export default function Thornia772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-baiak-server" />;
}
