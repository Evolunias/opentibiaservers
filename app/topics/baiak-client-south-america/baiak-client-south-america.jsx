import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-south-america');
}

export default function BaiakClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-south-america" />;
}
