import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-rules');
}

export default function HighrateBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-rules" />;
}
