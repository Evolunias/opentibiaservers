import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-baiak-server');
}

export default function Realera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-baiak-server" />;
}
