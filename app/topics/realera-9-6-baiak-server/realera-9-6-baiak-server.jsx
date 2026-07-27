import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-baiak-server');
}

export default function Realera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-baiak-server" />;
}
