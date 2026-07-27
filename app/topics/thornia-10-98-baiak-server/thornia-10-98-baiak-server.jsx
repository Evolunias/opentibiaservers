import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-baiak-server');
}

export default function Thornia1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-baiak-server" />;
}
