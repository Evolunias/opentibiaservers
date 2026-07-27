import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-north-america');
}

export default function BaiakGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-north-america" />;
}
