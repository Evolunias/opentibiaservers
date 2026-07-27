import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-germany');
}

export default function BaiakServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-germany" />;
}
