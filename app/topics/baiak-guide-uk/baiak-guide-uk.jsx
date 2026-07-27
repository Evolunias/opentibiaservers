import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-uk');
}

export default function BaiakGuideUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-uk" />;
}
