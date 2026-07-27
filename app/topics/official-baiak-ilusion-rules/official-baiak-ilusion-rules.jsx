import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-rules');
}

export default function OfficialBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-rules" />;
}
