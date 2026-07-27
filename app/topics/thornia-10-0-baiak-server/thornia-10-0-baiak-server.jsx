import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-baiak-server');
}

export default function Thornia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-baiak-server" />;
}
