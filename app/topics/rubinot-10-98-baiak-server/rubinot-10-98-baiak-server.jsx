import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-baiak-server');
}

export default function Rubinot1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-baiak-server" />;
}
