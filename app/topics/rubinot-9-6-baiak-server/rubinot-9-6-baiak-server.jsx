import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-baiak-server');
}

export default function Rubinot96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-baiak-server" />;
}
