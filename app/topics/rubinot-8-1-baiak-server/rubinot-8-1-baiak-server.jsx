import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-baiak-server');
}

export default function Rubinot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-baiak-server" />;
}
