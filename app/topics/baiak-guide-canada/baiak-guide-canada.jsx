import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-canada');
}

export default function BaiakGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-canada" />;
}
