import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-rules');
}

export default function PopularBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-rules" />;
}
