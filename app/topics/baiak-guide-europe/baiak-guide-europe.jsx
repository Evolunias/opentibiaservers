import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-europe');
}

export default function BaiakGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-europe" />;
}
