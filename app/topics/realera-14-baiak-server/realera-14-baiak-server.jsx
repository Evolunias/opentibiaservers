import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-baiak-server');
}

export default function Realera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-baiak-server" />;
}
