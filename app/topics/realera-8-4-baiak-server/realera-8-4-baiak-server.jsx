import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-baiak-server');
}

export default function Realera84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-baiak-server" />;
}
