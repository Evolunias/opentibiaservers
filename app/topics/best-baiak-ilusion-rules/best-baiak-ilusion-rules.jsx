import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-rules');
}

export default function BestBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-rules" />;
}
