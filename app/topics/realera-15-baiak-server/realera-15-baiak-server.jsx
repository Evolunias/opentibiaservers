import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-baiak-server');
}

export default function Realera15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-baiak-server" />;
}
