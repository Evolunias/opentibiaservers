import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-no-reset-server-north-america');
}

export default function BaiakIlusionNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-no-reset-server-north-america" />;
}
