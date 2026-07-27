import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-germany');
}

export default function BaiakGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-germany" />;
}
