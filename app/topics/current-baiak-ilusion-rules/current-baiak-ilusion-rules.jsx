import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-rules');
}

export default function CurrentBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-rules" />;
}
