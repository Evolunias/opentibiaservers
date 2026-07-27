import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-south-america');
}

export default function BaiakServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-south-america" />;
}
