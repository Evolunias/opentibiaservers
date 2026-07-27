import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-latin-america');
}

export default function BaiakGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-latin-america" />;
}
