import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-north-america');
}

export default function BaiakClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-north-america" />;
}
