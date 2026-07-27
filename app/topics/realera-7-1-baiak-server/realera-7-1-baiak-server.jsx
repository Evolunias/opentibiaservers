import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-baiak-server');
}

export default function Realera71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-baiak-server" />;
}
