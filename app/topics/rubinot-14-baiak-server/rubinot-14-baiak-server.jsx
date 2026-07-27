import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-baiak-server');
}

export default function Rubinot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-baiak-server" />;
}
