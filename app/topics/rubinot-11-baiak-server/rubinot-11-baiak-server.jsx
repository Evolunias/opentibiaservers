import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-baiak-server');
}

export default function Rubinot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-baiak-server" />;
}
