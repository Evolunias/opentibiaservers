import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-baiak-server');
}

export default function Rubinot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-baiak-server" />;
}
