import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-argentina');
}

export default function BaiakServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-argentina" />;
}
