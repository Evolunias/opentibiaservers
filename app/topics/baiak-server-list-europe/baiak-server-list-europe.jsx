import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-europe');
}

export default function BaiakServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-europe" />;
}
