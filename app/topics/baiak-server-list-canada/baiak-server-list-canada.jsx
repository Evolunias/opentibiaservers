import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-canada');
}

export default function BaiakServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-canada" />;
}
