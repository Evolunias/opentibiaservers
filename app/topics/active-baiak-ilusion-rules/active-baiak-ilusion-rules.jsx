import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-rules');
}

export default function ActiveBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-rules" />;
}
