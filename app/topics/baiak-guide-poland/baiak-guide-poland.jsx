import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-poland');
}

export default function BaiakGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-poland" />;
}
