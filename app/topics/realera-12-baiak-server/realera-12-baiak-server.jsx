import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-baiak-server');
}

export default function Realera12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-baiak-server" />;
}
