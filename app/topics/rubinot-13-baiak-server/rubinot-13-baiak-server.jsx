import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-baiak-server');
}

export default function Rubinot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-baiak-server" />;
}
