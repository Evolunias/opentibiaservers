import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-baiak-server');
}

export default function Rubinot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-baiak-server" />;
}
