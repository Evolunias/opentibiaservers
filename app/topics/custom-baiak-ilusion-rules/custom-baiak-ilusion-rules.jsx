import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-rules');
}

export default function CustomBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-rules" />;
}
