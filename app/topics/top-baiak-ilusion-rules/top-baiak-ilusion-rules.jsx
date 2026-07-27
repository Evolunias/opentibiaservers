import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-rules');
}

export default function TopBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-rules" />;
}
