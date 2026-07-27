import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-north-america');
}

export default function BaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-north-america" />;
}
