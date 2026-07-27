import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-south-america');
}

export default function BaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-south-america" />;
}
