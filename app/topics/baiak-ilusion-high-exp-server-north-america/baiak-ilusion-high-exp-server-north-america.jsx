import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-high-exp-server-north-america');
}

export default function BaiakIlusionHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-high-exp-server-north-america" />;
}
