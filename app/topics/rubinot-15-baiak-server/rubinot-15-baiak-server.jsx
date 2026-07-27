import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-baiak-server');
}

export default function Rubinot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-baiak-server" />;
}
