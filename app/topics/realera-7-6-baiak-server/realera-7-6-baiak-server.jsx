import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-baiak-server');
}

export default function Realera76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-baiak-server" />;
}
