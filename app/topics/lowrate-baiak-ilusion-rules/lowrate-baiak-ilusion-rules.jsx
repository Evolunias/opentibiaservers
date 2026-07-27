import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-rules');
}

export default function LowrateBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-rules" />;
}
