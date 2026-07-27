import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-uk');
}

export default function BaiakServerListUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-uk" />;
}
