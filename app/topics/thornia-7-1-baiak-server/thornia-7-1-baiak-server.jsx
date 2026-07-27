import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-baiak-server');
}

export default function Thornia71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-baiak-server" />;
}
