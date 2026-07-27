import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-brazil');
}

export default function BaiakServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-brazil" />;
}
