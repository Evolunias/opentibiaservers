import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-north-america');
}

export default function BaiakServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-north-america" />;
}
