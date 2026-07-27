import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-alternatives');
}

export default function BaiakIlusionAlternativesKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-alternatives" />;
}
