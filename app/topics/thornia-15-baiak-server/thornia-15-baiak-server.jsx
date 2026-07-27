import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-baiak-server');
}

export default function Thornia15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-baiak-server" />;
}
