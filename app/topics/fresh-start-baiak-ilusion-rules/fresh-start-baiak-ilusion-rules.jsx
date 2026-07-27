import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-rules');
}

export default function FreshStartBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-rules" />;
}
