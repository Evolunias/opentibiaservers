import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-baiak-server');
}

export default function Rubinot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-baiak-server" />;
}
