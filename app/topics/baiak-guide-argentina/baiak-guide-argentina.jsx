import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-argentina');
}

export default function BaiakGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-argentina" />;
}
