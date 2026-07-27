import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-72-baiak-server');
}

export default function Rubinot772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-72-baiak-server" />;
}
