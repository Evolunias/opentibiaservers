import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-baiak-server');
}

export default function Rubinot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-baiak-server" />;
}
