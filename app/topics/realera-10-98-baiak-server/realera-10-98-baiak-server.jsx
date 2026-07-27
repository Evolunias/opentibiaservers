import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-98-baiak-server');
}

export default function Realera1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-98-baiak-server" />;
}
