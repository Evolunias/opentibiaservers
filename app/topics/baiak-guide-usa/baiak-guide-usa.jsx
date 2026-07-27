import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-usa');
}

export default function BaiakGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-usa" />;
}
